import React from 'react';
import {useForm} from 'react-hook-form';
import download from 'downloadjs';
import axios from 'axios';
import logo from './logo.png';
import './App.css';

const App = () => {

  const tourettesGoals = {
    1: 'Increase in grades',
    2: 'Participation in after school events',
    3: 'Higher confidence in math',
    4: 'Higher confidence in science',
    5: 'Less disruptions during class'
  }

  const tourettesStatements = {
    1: 'Student will maintain a 3.0 GPA or above',
    2: 'Student will participate in at least 2 or more school clubs',
    3: 'Student will feel 4/5 on a monthly happiness survey about math',
    4: 'Student will feel 4/5 on a monthly happiness survey about science',
    5: 'Student will actively participate in class without issue'
  }

  const ADHDGoals = {
    1: 'Increase in happiness',
    2: 'Participation in band',
    3: 'Higher confidence in reading',
    4: 'Higher confidence in history',
    5: 'Less disruptions during class'
  }

  const ADHDStatements = {
    1: 'Student will maintain high happiness survey rating',
    2: 'Student will participate in band daily',
    3: 'Student will feel 4/5 on a monthly happiness survey about reading',
    4: 'Student will feel 4/5 on a monthly happiness survey about history',
    5: 'Student will actively participate in class without issue'
  }

  const { register, handleSubmit, setValue } = useForm();
  const [pdf, setPDF] = React.useState(null)
  const onSubmit = data => {
    console.log(data)
    axios({
      method: 'post',
      url: 'http://localhost:3002/ieps.pdf',
      data: data,
    }).then((response) => {
      console.log(response)
      let binary = atob(response.data)
      download(binary, 'filled.pdf', 'application/pdf')
    })
  };

  
  const [goals, setGoals] = React.useState(tourettesGoals)

  const [goalStatements, setGoalStatements] = React.useState(tourettesStatements)

  const swapDisability = (e) => {
    console.log(e.target.value)
    e.target.value === 'Tourettes' ? setGoals(tourettesGoals) : setGoals(ADHDGoals)
    e.target.value === 'Tourettes' ? setGoalStatements(tourettesStatements) : setGoalStatements(ADHDStatements)
    for(let i = 1; i <=5; i++){
      setValue(`goal${i}`, goals[i])
      setValue(`statement${i}`, goalStatements[i])
    }
  }

  return (
    <div className="App">
        <div className="student-info">
        <img src={logo} className='logo'/>
          <form>
            <label htmlFor="Disability">Load in suggested goals for Disability: </label>
            <select name="Disability" onChange={swapDisability}>
              <option value="Tourettes">Tourettes</option>
              <option value="ADHD">ADHD</option>
            </select>
          </form>
          <p> Student Name: Dustin Merritt </p>
          <p> Guardian 1 Name: James Merritt </p>
          <p> Guardian 2 Name: Elizabeth Merritt </p>
        </div>
        <div className = "goal-form">
          <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your textarea into the hook by invoking the "register" function */}
            <label for="goal1">Goal 1:</label>
            <textarea name="goal1"  ref={register} />
            <label for="statement1">Goal Statement 1:</label>
            <textarea name="statement1"  ref={register} />
            <label for="goal2">Goal 2:</label>
            <textarea name="goal2"  ref={register} />
            <label for="statement2">Goal Statement 2:</label>
            <textarea name="statement2"  ref={register} /> 
            <label for="goal3">Goal 3:</label>
            <textarea name="goal3"  ref={register} />
            <label for="statement3">Goal Statement 3:</label>
            <textarea name="statement3"  ref={register} /> 
            <label for="goal4">Goal 4:</label>
            <textarea name="goal4" ref={register} />
            <label for="statement4">Goal Statement 4:</label>
            <textarea name="statement4"  ref={register} /> 
            <label for="goal5">Goal 5:</label>
            <textarea name="goal5"  ref={register} />
            <label for="statement5">Goal Statement 5:</label>
            <textarea name="statement5"  ref={register} />               
            <input type="submit" />
          </form>
        </div>
    </div>
  );
}

export default App;
