import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFilm, selectFilm } from './store';

const ratingOptions = [1, 2, 3, 4, 5];

class Form extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      description: '',
      rating: 0,
      image: ''
    };
    this.initState = this.initState.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.film !== prevProps.film) {
      this.initState();
    }
  }
  
  componentDidMount() {
    if (this.props.film) {
      this.initState();
    }
  }
  
  initState() {
    if (!this.props.film) {
      return false;
    }
    const { name, description, rating, image } = this.props.film;
    this.setState({
      name,
      description,
      rating,
      image
    })
  }

  onChangeField(event) {
    let newState = {};

    switch (event.target.name) {
      case 'name': newState = {name: event.target.value}; break;
      case 'description': newState = {description: event.target.value}; break;
      case 'rating': newState = {rating: event.target.value}; break;
      default:
    }

    this.setState(newState);
  }
  
  onChangeImage(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({image: reader.result});
    }
    reader.readAsDataURL(file)
  }
  
  removeImage(event) {
    event.preventDefault();
    this.setState({image: ''});
  }

  render() {
    const { name, description, rating, image } = this.state;
    const { updateFilm, selectedId } = this.props;

    return (
      <form className="movieForm" onSubmit={(e) => updateFilm(e, selectedId, { name, description, rating, image })}>
        <input type="hidden" name="selectedId" value={selectedId} />
        <div className="formField">
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" onChange={this.onChangeField} value={name} />
        </div>
        <div className="formField">
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" onChange={this.onChangeField} value={description}></textarea>
        </div>
        <div className="formField">
          <label htmlFor="rating">Rating:</label>
          <select name="rating" id="rating" onChange={this.onChangeField} value={rating}>
            {ratingOptions.map((v, i) =>
              <option value={v} key={i}>{v}</option>
            )}
          </select> *
        </div>
        <div className="formField">
          <label htmlFor="rating">Image:</label>
          <input type="file" name="image" onChange={this.onChangeImage} />
          { image &&
            <div className="imageContainer">
              <img src={image} alt="preview" />
              <a href="/" onClick={this.removeImage}>Remove image</a>
            </div>
          }
        </div>
        <button type="submit">Submit</button>&nbsp;
        <button type="reset" onClick={this.initState}>Reset</button>
      </form>
    )
  }
  
}

const mapStateToProps = state => ({
  film: state.films[state.selectedId],
  selectedId: state.selectedId
});

const mapDispatchToProps = dispatch => ({
  updateFilm: (e, id, data) => {
    e.preventDefault();
    dispatch(updateFilm(id, data));
    dispatch(selectFilm(null));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);