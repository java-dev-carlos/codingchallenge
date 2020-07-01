/**
 * Created by CarlosM on 26/06/2020.
 */
import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { Descriptions, Badge, Spin, Modal, Button } from 'antd';
import './data.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getLaunchData } from '../actions';

let Data = ({match, getLaunchData, loading, launch }) => {
    useEffect(() => {
        getLaunchData(match.params.id);
    }, []);
    let id = "", name="", status="";
    if (launch!==undefined) {
        id = launch.id;
        name = launch.name;
        status = launch.status.name;
    }
    return <>
    <Spin spinning={ loading } tip="Cargando...">
        <Descriptions title="Launch Info" bordered>
            <Descriptions.Item label="Id" span={2}>{ launch!==undefined?launch.id:"" }</Descriptions.Item>
            <Descriptions.Item label="Go Back">{ <Link to="/">Home</Link>
            }</Descriptions.Item>
            <Descriptions.Item label="Name" span={2}>{ launch!==undefined?launch.name:"" }</Descriptions.Item>
            <Descriptions.Item label="Status">{ launch!==undefined?launch.status.name:"" }</Descriptions.Item>
            <Descriptions.Item label="Rocket Config" span={3}>
                Name: { launch!==undefined?launch.rocket.configuration.name:"" }
                <br />
                Description: { launch!==undefined?launch.rocket.configuration.description:"" }
                <br />
                ---------------------------------------------------------------------------------------
                <br />
                <b><u>Launch Service Provider</u></b>
                <br />
                Name: { launch!==undefined?launch.rocket.configuration.launch_service_provider.name:"" }
                <br />
                Type: { launch!==undefined?launch.rocket.configuration.launch_service_provider.type:"" }
                <br />
                Country Code: { launch!==undefined?launch.rocket.configuration.launch_service_provider.country_code:"" }
                <br />
                Abbrev: { launch!==undefined?launch.rocket.configuration.launch_service_provider.abbrev:"" }
                <br />
                Description: { launch!==undefined?launch.rocket.configuration.launch_service_provider.description:"" }
                <br />
                Administrator: { launch!==undefined?launch.rocket.configuration.launch_service_provider.administrator:"" }
                <br />
                Launchers: { launch!==undefined?launch.rocket.configuration.launch_service_provider.launchers:"" }
                <br />
            </Descriptions.Item>
            <Descriptions.Item label="Mission" span={3}>
                Name: { launch!==undefined?launch.mission.name:"" }
                <br />
                Description: { launch!==undefined?launch.mission.description:"" }
                <br />
                Type: { launch!==undefined?launch.mission.type:"" }
                <br />
            </Descriptions.Item>
            <Descriptions.Item label="Pad" span={3}>
                Name: { launch!==undefined?launch.pad.name:"" }
                <br />
                Wiki URL: { launch!==undefined?launch.pad.wiki_url:"" }
                <br />
                Map URL: { launch!==undefined?launch.pad.map_url:"" }
                <br />
                Latitude: { launch!==undefined?launch.pad.latitude:"" }
                <br />
                Longitude: { launch!==undefined?launch.pad.longitude:"" }
                <br />
                Location: { launch!==undefined?launch.pad.location.name+" ("+launch.pad.location.country_code+")":"" }
                <br />
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
                <Badge status="processing" text="Running" />
            </Descriptions.Item>
        </Descriptions>
    </Spin>
    </>
}

const mapDispatchToProps = {
    getLaunchData: getLaunchData
}

const mapStateToProps = (state) => (
    { loading: state.loading,
        launch: state.launch }
)

Data = connect(mapStateToProps, mapDispatchToProps)(Data);

export default Data;