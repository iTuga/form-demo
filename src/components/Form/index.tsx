'use client'
import React, {useState} from 'react';
import {Button, Col, Form, Input, InputNumber, Row, Select, Switch,} from 'antd';
import styles from './index.module.css'
import Title from "antd/es/typography/Title";
import {number, object as yup, string} from 'yup';
import { useFormik } from 'formik';
import {CheckOutlined} from "@ant-design/icons";


function DemoForm () {

    const [initialFormValues, setInitialFormValues] = useState<FormInterface>({
        patient: '',
        description: '',
        phone: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: initialFormValues,
        validateOnChange: true,
        validateOnBlur: false,
        enableReinitialize: true,
        onSubmit: () => {
            setIsSubmitted(true);
            formik.resetForm();
        },
        validationSchema: yup({
            patient: string().trim().required('Enter Patient'),
            description: string().required('Enter Description'),
            phone: string()
                .trim()
                .required('Enter your work phone number')
                .matches(REGEX.PHONE, 'Phone number is not of the right format'),
        }),
    });
    function nameof(property: { [key: string]: any }) {
        return Object.keys(property)[0];
    }

    const statusFor = (field: keyof FormInterface) => {
        return formik.errors[field] && formik.touched[field] ? 'error' : '';
    };

    const helpFor = (field: keyof FormInterface) => {
        return formik.touched[field] && formik.errors[field] && String(formik.errors[field]);
    };

    const { patient, description, phone, hours, minutes } =
    formik.values || {};

    return (
        <div className={styles.formWrapper}>
            <Form onFinish={formik.submitForm} className={`${styles.form} ${isSubmitted && styles.submitted}`}>
                <Title level={3}>Appointment</Title>
                <Form.Item
                    label="Patient Chart"
                    labelCol={{span: 4}}
                    labelAlign={'left'}
                    validateStatus={statusFor('patient')}
                    help={helpFor('patient')}
                >
                    <Input
                        autoComplete="off"
                        value={patient}
                        {...formik.getFieldProps(nameof({ patient }))}
                    />
                </Form.Item>
                <Form.Item
                    label="Description"
                    labelCol={{span: 4}}
                    labelAlign={'left'}
                    validateStatus={statusFor('description')}
                    help={helpFor('description')}
                >
                    <Select
                        autoComplete="off"
                        value={description}
                        {...formik.getFieldProps(nameof({ description }))}
                        onChange={value => formik.setFieldValue(nameof({ description }), value)}
                    >
                        <Select.Option value="demo">Description 1</Select.Option>
                        <Select.Option value="demo">Description 2</Select.Option>
                        <Select.Option value="demo">Description 3</Select.Option>
                        <Select.Option value="demo">Description 4</Select.Option>
                        <Select.Option value="demo">Description 5</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Note" labelCol={{span: 4}} labelAlign={'left'}>
                    <Input autoComplete="off" />
                </Form.Item>
                <Row justify={'space-between'}>
                    <Col span={12}>
                        <Form.Item
                            label="Home Phone"
                            labelCol={{span: 8}}
                            labelAlign={'left'}
                        >
                            <Input
                                autoComplete="off"
                                prefix={'+'}
                                placeholder="0000000000"
                                maxLength={12}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={'space-between'}>
                    <Col span={12}>
                        <Form.Item
                            label="Work Phone"
                            labelCol={{span: 8}}
                            labelAlign={'left'}
                            validateStatus={statusFor('phone')}
                            help={helpFor('phone')}
                        >
                            <Input
                                autoComplete="off"
                                prefix={'+'}
                                placeholder="0000000000"
                                maxLength={12}
                                {...formik.getFieldProps(nameof({ phone }))}
                                onChange={e => REGEX.NUMBERS.test(e.target.value) && formik.handleChange(e)}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item label="Ext" labelCol={{span: 4}} labelAlign={'left'}>
                            <InputNumber autoComplete="off" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Form.Item label="Alarm"  valuePropName="checked">
                            <Switch />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="Missed" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                    </Col>
                </Row>
                <Title level={3}>Length</Title>
                <Row>
                    <Col span={6}>
                        <Form.Item
                            label="Hours"
                        >
                            <InputNumber
                                max={23}
                                min={0}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Minutes"
                        >
                            <InputNumber
                                max={59}
                                min={0}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={'center'} className={styles.buttonWrapper}>
                    <Col span={6}>
                        <Button className={styles.button} type={'primary'} htmlType="submit">Ok</Button>
                    </Col>
                    <Col span={6}>
                        <Button className={styles.button}>Cancel</Button>
                    </Col>
                </Row>
            </Form>
            <div className={`${styles.successBlock} ${isSubmitted && styles.show}`}>
                <CheckOutlined className={styles.successIcon}/>
                <Title level={2}>You have successfully submitted the form</Title>
                <Button
                    type={'primary'}
                    htmlType="submit"
                    onClick={() => setIsSubmitted(false)}
                >
                    Send another one
                </Button>
            </div>
        </div>
    );
}

export interface FormInterface {
    patient: string;
    description: string;
    phone: string;
}

export const REGEX = {
    PHONE:
        /^\s*(?:(?:\+\d{1,4}[\s-]*)|(?:\(\d{2,4}\)[\s-]*)|(?:\d{2,4}[\s-]*))*?\d{3,4}[\s-]*\d{3,4}\s*$/,
    NUMBERS: /^[0-9]*$/,
}

export default DemoForm;