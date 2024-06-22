import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    completed: []
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.addTodo();
    }
  };

  addTodo = () => {
    // 입력된 텍스트 가져오기
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    // 입력된 텍스트가 비어있는지 확인
    if (todoText === "") {
      alert("스터디 계획을 입력하세요.");
      return;
    }

     // 새로운 Todo 객체 생성
    const newTodo = { text: todoText, id: Date.now() };

    // 상태 업데이트: 새로운 Todo를 기존 todos 배열에 추가 -> 이전 상태(prevState)를 받아와서 새로운 상태를 반환
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo]
    }));

    // 입력 필드 비우기
    todoInput.value = "";
  };

  completeTodo = (id) => {
    const { todos, completed } = this.state;
    const completedTodo = todos.find(todo => todo.id === id);  // todo에서 주어진 id와 일치하는 todo값 찾기
    
    this.setState((prevState) => ({
      //todos 배열에서 주어진 id와 일치하지 않는 Todo만을 필터링하여 새로운 todos 배열 생성
      todos: prevState.todos.filter(todo => todo.id !== id),
      //기존의 completed 배열에 새로운 completedTodo를 추가한 새로운 배열을 생성
      completed: [...prevState.completed, completedTodo]
    }));
  };

  deleteTodo = (id) => {
    //completed 배열을 필터링하여 주어진 id와 일치하지 않는 Todo만을 남기고 새로운 completed 배열을 생성
    this.setState((prevState) => ({
      completed: prevState.completed.filter(todo => todo.id !== id)
    }));
  };

  render() {
    const { todos, completed } = this.state;

    return (
      <div align="center" className="study">
        <div className="study-body">
          <div className="study-title">
            <h2>UMC Study Plan</h2>
          </div>
          <hr />
          <div>
            <input
              type="text"
              id="todoInput"
              placeholder="스터디 계획을 작성해보세요!"
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="study-todolist">
            <span id="list-title">해야 할 일</span>
            <table>
              <tbody>
                {todos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    action={() => this.completeTodo(todo.id)}
                    buttonText="완료"
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="study-donelist">
            <span id="list-title">해낸 일</span>
            <table>
              <tbody>
                {completed.map(todo => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    action={() => this.deleteTodo(todo.id)}
                    buttonText="삭제"
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

class TodoItem extends Component {
  render() {
    //this.props => 속성(props)으로 전달된 값
    const { text, action, buttonText, deleteAction } = this.props;  
    return (
      <tr>
        <td>{text}</td>
        <td>
          <button onClick={action}>{buttonText}</button>
        </td>
      </tr>
    );
  }
}

export default App;