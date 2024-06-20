import React from 'react'
import Count from './components/Count'
import Job from './components/Job'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'
import Bai7bai8 from './components/Bai7bai8'
import Register from './components/bai9/Register'
import TodoList from './components/bai11bai12/TodoList'

export default function App() {
  return (
    <div>
      <Count></Count>
      <Job></Job>
      <h1>*************</h1>
      <h1>Bài 1:</h1>
      <Bai1></Bai1>
      
      <h1>Bài 2:</h1>
      <Bai2></Bai2>
      <h1>Bài 3:</h1>
      <Bai3></Bai3>
      <h1>Bài 4:</h1>
      <Bai4></Bai4>
      <h1>Bài 5:</h1>
      <Bai5></Bai5>
      
      <h1>Bài 6:</h1>
      <Bai6></Bai6>
      <h1>Bài 7 bai8:</h1>
      <Bai7bai8></Bai7bai8>
      
      <h1>Bài 9:</h1>
      <Register></Register>

      <h1>Bài 11 12:</h1>
      <TodoList></TodoList>
    </div>
  )
}
