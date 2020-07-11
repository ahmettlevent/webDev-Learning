import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCategory: "Seçim Yapılmadı",
      title: "Categories",

      categories: []
    }
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(data => this.setState({ categories: data }))
  }

  render() {


    return (
      <div>

        <h3>{this.state.title}</h3>

        <ListGroup>
          {this.state.categories.map(item => (
            <ListGroupItem active={item.categoryName === this.props.currentCategory ? true : false} onClick={() => this.props.changeCategory(item)} key={item.id}>{item.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
      </div >
    );
  }
}

export default CategoryList;