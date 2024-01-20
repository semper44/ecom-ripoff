import React, { useContext} from 'react'
import styles from "./dashboard.module.css"
import { BarChart } from '../extra comp/admin/BarChart'
import { PieChart } from '../extra comp/admin/PieChart'
import { LineChart } from '../extra comp/admin/LineChart'
import StatBox from '../extra comp/admin/StatBox'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { adminOverview } from '../../stores/CartContxt'
import Loading from "../extra comp/Loading"
import { ThemeData } from '../../App'
// import PieChart

function DashBoard() {
  const Themes=useContext(ThemeData)
  const{Orders, MostBoughtCategory, TotalUsers, MonthlyUsers}=useContext(adminOverview)
  
  // const[NumOfUsers, SetNumOfUsers]= useState()
  console.log(Themes)
  // console.log(TotalUsers?.sellers+TotalUsers["no-seller"])
  
  return (
    <>
    {(Orders,MostBoughtCategory,TotalUsers,MonthlyUsers)?<div className={styles.parent}>
      <div className={styles.statbox}>
        <StatBox
          title={TotalUsers?.seller+TotalUsers["no-seller"]}
          subtitle="Total Users"
          progress="0.75"
          increase="14%"
          icon={
            <EmailOutlinedIcon
            sx={{color:"gray", fontSize:"26px"}} />
          }
        />
        <StatBox
          title={TotalUsers?.seller}
          subtitle="Total Sellers"
          progress="0.75"
          increase="14%"
          icon={
            <EmailOutlinedIcon
            sx={{color:"gray", fontSize:"26px"}} />
          }
        />
        <StatBox
          title={TotalUsers&&TotalUsers["no-seller"]}
          subtitle="Total Buyers"
          progress="0.75"
          increase="14%"
          icon={
            <EmailOutlinedIcon
            sx={{color:"gray", fontSize:"26px"}} />
          }
        />
        <StatBox
          title={TotalUsers?.goods}
          subtitle="Total Goods"
          progress="0.75"
          increase="14%"
          icon={
            <EmailOutlinedIcon
            sx={{color:"gray", fontSize:"26px"}} />
          }
        />
      </div>
      <div className={styles.sales}>

      </div>
      <div className={styles.infographics}>
        <div className={styles.charts}>
          <PieChart />        
        </div>
        <div className={styles.chats} id={styles.chart2}>
            <BarChart />
        </div>
        <div className={styles.chats} id={styles.chart2}>
            <LineChart />
        </div>

      </div>
    </div>: <Loading /> }
    
    </>
  )
}

export default DashBoard