import { useSelector } from "react-redux"

export default function Job() {
    const stateJob = useSelector((state:any)=>{
        return state
    })
    console.log(stateJob.jobReducer);
  return (
    <div>**********
      {stateJob.jobReducer.map((item:any)=>{
        return <li key={item.id}> {item.name} </li>
      })}
    </div>
  )
}