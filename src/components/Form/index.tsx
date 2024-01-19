'use client'
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    Checkbox, Col,
    ColorPicker,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio, Row,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
import styles from './index.module.css'
import Title from "antd/es/typography/Title";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

function DemoForm () {

    return (
        <div className={styles.formWrapper}>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
            >
                <Title level={3}>Appointment</Title>
                <Form.Item label="Patient Chart">
                    <Input />
                </Form.Item>
                <Form.Item label="Description">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Note">
                    <Input />
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item label="Alarm" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Missed" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                    </Col>
                </Row>
                <Title level={3}>Length</Title>
                <Row>
                    <Col span={12}>
                        <Form.Item label="Hours">
                            <InputNumber />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Minutes">
                            <InputNumber />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default DemoForm;