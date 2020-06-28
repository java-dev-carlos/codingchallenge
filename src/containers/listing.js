/**
 * Created by CarlosM on 18/06/2020.
 */

import React, {useEffect, useState} from 'react';
import api from './API';
import { Link } from "react-router-dom";
import { Table } from 'antd';


function Listing() {
    const [data, setData] = useState({launches: [], isFetching: false});
    useEffect(() => {
        const fetchLaunches = async () => {
            setData({launches: data.launches, isFetching: true});
            api.get("/upcoming")
                .then(response => {
                    setData({launches: response.data, isFetching: false});
                })
                .catch(error => {
                    console.log(error);
                    setData({launches: data.launches, isFetching: false});
                })
        };
        fetchLaunches();
    }, []);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: text => <Link to="/data">{text}</Link>,
        },
        {
            title: 'Cash Assets',
            className: 'column-money',
            dataIndex: 'money',
            align: 'right',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];
    const datax = [
        {
            key: '1',
            name: 'John Brown',
            money: '￥300,000.00',
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            money: '￥1,256,000.00',
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            money: '￥120,000.00',
            address: 'Sidney No. 1 Lake Park',
        },
    ];
    return <Table
        columns={columns}
        dataSource={datax}
        bordered
        size="small"
        title={() => <h2>Coding Challenge</h2>}
    />;
}

export default Listing;
