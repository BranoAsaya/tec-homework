import React, { Component } from "react";

export default class ShowPosts extends Component {
  state = { posts: [], inputI: "", inputII: "", index: "" };
  array = [];

  componentDidMount() {
    this.getApiData();
  }
  getApiData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }))
      .catch((err) => console.error(err));
  };
  componentDidUpdate() {
    // console.log(this.state.posts);
  }
  deletePost = (e) => {
    this.array = this.state.posts;
    let num = Number(e.target.name);
    this.array.splice(num, 1);
    this.setState({ posts: this.array });
  };
  editPost = (e) => {
    let num = Number(e.target.name);
    this.setState({ inputI: this.state.posts[num].title });
    this.setState({ inputII: this.state.posts[num].body });
    this.setState({ index: num });
  };
  updatePost = (e) => {
    e.preventDefault();
    this.array = this.state.posts;
    this.array[this.state.index].title = e.target.title.value;
    this.array[this.state.index].body = e.target.body.value;
    this.setState({ posts: this.array });
  };
  render() {
    return (
      <>
        <div className='con'>
          <form onSubmit={this.updatePost}>
            <button type='submit'>UPDATE</button>
            <input
              type='text'
              placeholder={this.state.inputI}
              name='title'
              key={this.index}
            />
            <input type='text' placeholder={this.state.inputII} name='body' />
          </form>
          <table>
            <thead>
              <tr key='12'>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((post, i) => {
                return (
                  <>
                    <tr key={i}>
                      <button
                        onClick={this.deletePost}
                        name={i}
                        className='btn_delete'>
                        delete
                      </button>
                      <button onClick={this.editPost} name={i}>
                        edit
                      </button>
                      <td>{post.userId}</td>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
