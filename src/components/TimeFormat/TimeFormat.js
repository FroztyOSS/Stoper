import styles from './TimeFormat.module.scss';


const TimeFormat = ({ time }) => {



   const formatTime = () => {
       
     return (
       <div className={styles.wrapper}>
         <span>{"0" + parseInt((time/(1000*60*60))%24)}:</span>
         <span>{"0" + parseInt((time/(1000*60))%60)}:</span>
         <span>{"0" + parseInt((time/1000)%60)}.</span>
         <span>{parseInt((time%1000))}</span>
       </div>
     )};

  return (
    <div className={styles.stopwatch}>
       {formatTime(time)}
    </div>
  );

};

export default TimeFormat; 