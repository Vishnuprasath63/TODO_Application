import React, { Component } from "react";
class App extends Component {
    constructor(props) {
        super(props);

        // Setting up state
        this.state = {
            userInput: "",
            list: [],
        };
    }

    // Set a user input value
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    // Add item if user input in not empty
    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                // Add a random id which is used to delete
                id: Math.random(),

                // Add a user value to list
                value: this.state.userInput,
            };

            // Update list
            const list = [...this.state.list];
            list.push(userInput);

            // reset state
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    // Function to delete item from list use id to delete
    deleteItem(key) {
        const list = [...this.state.list];

        // Filter values and leave value which we need to delete
        const updateList = list.filter((item) => item.id !== key);

        // Update list in state
        this.setState({
            list: updateList,
        });
    }

    editItem = (index) => {
      const todos = [...this.state.list];
      const editedTodo = prompt('Edit the todo:');
      if (editedTodo !== null && editedTodo.trim() !== '') {
        let updatedTodos = [...todos]
        updatedTodos[index].value= editedTodo
        this.setState({
          list: updatedTodos,
      });
      }
    }

    render() {
        return (
            
          <body>
          <div className="container">
          <div className="header">
            <img src="pngwing.com.png" />
              TODO LIST
          </div>
          <hr />
          <div className="row">
              <div className="col">
                  <div className="inputGroup">
                      <input
                          type="text"
                          placeholder="   add items . . . "
                          className="input"
                          value={this.state.userInput}
                          onChange={item => this.updateInput(item.target.value)}
                      />
                      <button className="button-30" onClick={() => this.addItem()}>
                          ADD
                      </button>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <ul className="listGroup">
                      {this.state.list.map((item, index) => {
                          return (
                              <li key={index} className="listItem">
                                                  <div class="checkbox-wrapper-11">
                                                  <input id="02-11" type="checkbox" name="r" value="2"/>
                                                  <label for="02-11">{item.value}
                                                  </label>
                                                  </div>

                                  <span>
                                            <button
                                                className="button deleteButton"
                                                onClick={() => this.deleteItem(item.id)}>
                                                Delete
                                            </button>
                                            <button
                                                className="button"
                                                onClick={() => this.editItem(index)}>
                                                Edit
                                            </button>
                                        </span>
                              </li>
                          );
                      })}
                      
                  </ul>
              </div>
          </div>
      </div>
      </body>
        );
    }
}

export default App;
