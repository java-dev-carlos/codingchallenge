/**
 * Created by CarlosM on 18/06/2020.
 */

import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { Table, Spin, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';
import { getLaunches } from '../actions';

const { error } = Modal;



let Listing = ({getLaunches, loading, launches, counter}) => {
    useEffect(() => {
        getLaunches();
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: "id",
            render: text => <Link to={"/data/" + text}>{text}</Link>,
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
        },
    ];
    const datax = [];
    if (launches!==null && launches!==undefined && launches.length>0) {
        for (let i = 0; i < launches.length; i++) {
            datax.push({
                id: launches[i].id,
                name: launches[i].name
            })
        }
    } else if (counter===-1) {
        error({
            title: 'Error al conectarse al servidor',
            icon: <ExclamationCircleOutlined />,
            content: 'No se han leído los datos correctamente. Esto puede deberse a un error de conexión al servidor. Verifique su conexión a internet y después recargue la página...',
            okText: 'Aceptar',
        });
        loading = false;
    }
    return <>
    <Spin spinning={ loading } tip="Cargando...">
        <Table
            columns={columns}
            dataSource={datax}
            width="400px"
            rowKey="id"
            bordered
            size="small"
        />
    </Spin>
    </>
}

const mapDispatchToProps = {
    getLaunches: getLaunches
}

const mapStateToProps = (state) => (
    { loading: state.loading,
      launches: state.launches,
      counter: state.counter }
)

Listing = connect(mapStateToProps, mapDispatchToProps)(Listing);

export default Listing;
