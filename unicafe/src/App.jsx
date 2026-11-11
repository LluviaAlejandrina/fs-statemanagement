import { useCounters, useCounterActions } from './store'

const Counter = ({text, count}) => {
  return (

      <tr>
      <td>{text}</td>
      <td>{count}</td>
     </tr>


  )
}
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

 const Statistics = ({good,neutral,bad,countAll,sumOfAll}) => {

  const average = countAll === 0 ? 0 : sumOfAll/countAll
  const positive = countAll === 0 ? 0 :(good/countAll) * 100

/*   if (countAll === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <div>No feedback given </div>
      </div>

    )
  } */
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
      <Counter text= 'good' count = {good}/>
      <Counter text= 'neutral' count = {neutral}/>
      <Counter text= 'bad' count = {bad}/>
      <Counter text= 'all' count = {countAll}/>
      <Counter text= 'average' count = {average}/>
      <Counter text= 'positive' count = {positive + ' %'}/>
        </tbody>
      </table>
    </div>
   )
 }

const App = () => {
  // save clicks of each button to its own state
   const { good, bad, neutral } = useCounters()
   const { increaseGood, increaseBad, increaseNeutral } = useCounterActions()
  const countAll = good + neutral + bad
  const sumOfAll = good - bad




  return (
    <div>
      <h1>Unicafe</h1>
      <h2>Give feedback</h2>
      <Button onClick={increaseGood} text='good'/>
      <Button onClick={increaseNeutral} text='neutral'/>
      <Button onClick={increaseBad} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} countAll={countAll} sumOfAll={sumOfAll}/>

    </div>
  )
}

export default App
