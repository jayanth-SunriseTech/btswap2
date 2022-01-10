import './Chart.css';
import axios from 'axios';
import {ResponsiveContainer,AreaChart,XAxis,YAxis,Area,Tooltip,CartesianGrid} from 'recharts'

function Chart() {
    const getData = async() => {
        const data = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
         {
          'start': '1',
          'limit': '5000',
          'convert': 'USD'
        },)
    }
    return (
        <div>
            <ResponsiveContainer className='chart-container' width={698} height={278}>
                <AreaChart>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
