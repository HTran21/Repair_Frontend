import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";

import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import axios from 'axios';

const cx = classNames.bind(styles);

function Dashboard() {

    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3000/repair/dashboard")
            .then(res => {
                // setData(res.data);
                const data = res.data;

                if (data && data.length > 0) {
                    const labels = data.map(item => item.nameItem);
                    const values = data.map(item => item.TotalRepairs);

                    setChartData({
                        labels: labels,
                        datasets: [
                            {
                                label: 'Lượt đăng ký',
                                data: values,
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1,
                            },
                        ],
                    });
                }
            })
            .catch((err) => console.log(err));
    }, [])



    return (
        <div className="container min-vh-100">
            <div className={`${cx("titlePage")} mt-4`}>
                <h1 className={cx("title")}>Dashboard</h1>
            </div>
            <div className={cx("contentPage")}>
                <div style={{ height: '500px', display: 'flex', justifyContent: 'center' }}>

                    {chartData && Object.keys(chartData).length > 0 && (
                        <Bar data={chartData} />
                    )}
                </div>

                <h3 className="text-center mt-4">Thống kê lượt đăng ký theo thiết bị</h3>
            </div>
        </div>

    );
}

export default Dashboard;