import React, { Component } from 'react';

class List extends Component {
  
  render() {
    const { films, selectedId, selectFilm } = this.props;
    const descrLength = 50;

    return (
      <div className="movieSummary">
        { films.map((f, i) =>
          <p className={i === selectedId ? 'selected' : ''} onClick={() => selectFilm(i)} key={i}>
            <b>{ f.name }</b> - { f.rating }*<br />
            {f.description.slice(0, descrLength)}
            {f.description.length > descrLength && '...'}
            {f.image && <img alt={f.title} src={f.image} />}
          </p>
        )}
      </div>
    )
  }
  
}

export default List;