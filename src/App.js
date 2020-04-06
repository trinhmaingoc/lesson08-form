import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      description: '',
      gender: 0,
      langue: 'english',
      status: false,
    }
  };

  onHandleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

  };

  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">

                <form onSubmit={this.onHandleSubmit} >
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onHandleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onHandleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mô Tả</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      value={this.state.description}
                      onChange={this.onHandleChange}>
                    </textarea>
                  </div>
                  <div className="form-group">
                    <label>Giới Tính</label>
                    <select 
                      name="gender" 
                      className="form-control" 
                      value={this.state.gender} 
                      onChange={this.onHandleChange}
                    >
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Ngôn Ngữ</label>
                    <div className="radio">
                      <label>
                        <input 
                          type="radio" 
                          name="langue" 
                          value="english" 
                          onChange={this.onHandleChange}
                          checked={this.state.langue === "english"} 
                        />
                        English
                      </label> <br />
                      <label>
                        <input 
                          type="radio" 
                          name="langue" 
                          value="vietnamese" 
                          onChange={this.onHandleChange}
                          checked={this.state.langue === "vietnamese"}  
                        />
                        Tiếng Việt
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="checkbox">
                      <label>
                        <input 
                          type="checkbox"
                          name="status"
                          onChange={ this.onHandleChange }
                          checked={this.state.status}
                        />
                        Trạng Thái
                      </label>
                    </div>
                    
                  </div>

                  <button type="submit" className="btn btn-primary">Lưu Lại</button> &nbsp;
                  <button type="reset" className="btn btn-default">Xóa Trắng</button>
                </form>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App
