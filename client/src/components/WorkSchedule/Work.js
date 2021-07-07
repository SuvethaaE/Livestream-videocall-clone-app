import React, {useState} from 'react';
import './Work.css';
const AddTask=({addtask}) =>{
  const [value,updatevalue] = useState("");

const Task_submit = a =>{
  a.preventDefault();
  if(value!=="")
  {
    addtask(value)
    updatevalue("");
  }
};
return(
  <form onSubmit={Task_submit}>
    <input
     type ="text"
     value={value} 
     placeholder="Enter your schedule:"
      onChange={a => updatevalue(a.target.value)}
      />
    <button type="submit"><i class="material-icons">add</i></button>
  </form>
);
}

const ScheduleList = () =>{
 const addtask = text =>update_task([...old_task,{text}]);
const[old_task,update_task] = useState([
  {
   text:"You never get a second chance to make a first impression!!",
   isCompleted:false
  },
  {
    text:"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it!!",
    isCompleted:false
  },
  {
    text:"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.” — Steve Jobs",
    isCompleted:false
   }
  ]);
  const striketask = index =>{
    const new_task = [...old_task];
    if(new_task[index].isCompleted){
      new_task[index].isCompleted=false;
    }
    else{
      new_task[index].isCompleted=true;
    }
    update_task(new_task);
  }
  const delete_task=index =>{
    const new_task =[...old_task];
    new_task.splice(index,1);
    update_task(new_task);
  }
  
return(
  <div classname="scheduled_list">
   {old_task.map((schedules,index) => (
    <div classname = "Scheduling_Status">
      <span onClick= {() => striketask(index)}className={schedules.isCompleted? "schedule-name completed-task":"schedule-name"}>
      
      {schedules.text}
      </span>
      <button onClick={()=> delete_task(index)}><i class = "material-icons">delete</i></button>
      </div>
     ))}
    <AddTask addtask={addtask}/>
   </div>
   );
}
export default ScheduleList
//ReactDOM.render(<ScheduleList />,document.getElementById('root'));

