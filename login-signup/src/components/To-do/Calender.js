import Motion from "../Motion";
import chart from '../../assets/schedule-chart.png'
import './to-do.css'

const CalenderComponent = () => {
  return (
    <>
    <img src={chart} className="chart-img"/>
    </>
  )
};

const Calender = Motion(CalenderComponent);

export default Calender;