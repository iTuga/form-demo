'use client'
import React, {useState} from 'react';
import {Button, Checkbox, Col, Form, Input, InputNumber, Row, Select, Switch,} from 'antd';
import styles from './index.module.css'
import Title from "antd/es/typography/Title";
import {number, object as yup, string} from 'yup';
import { useFormik } from 'formik';
import {CheckOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";


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
            patient: string().trim().required('Enter patient'),
            description: string().required('Enter description'),
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

    const { patient, description, phone } =
    formik.values || {};

    return (
        <div className={styles.formWrapper}>
            <Form onFinish={formik.submitForm} className={`${styles.form} ${isSubmitted && styles.submitted}`}>
                <Title level={3}>Appointment</Title>
                <Row justify={'space-between'}>
                    <Col span={16}>
                        <Form.Item
                            className={styles.formItem}
                            label="Patient name"
                            labelCol={{span: 6}}
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
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            className={styles.formItem}
                            label="I`m new patient"
                            labelCol={{span: 16}}
                            labelAlign={'left'}
                        >
                            <Checkbox />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    className={styles.formItem}
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
                        <Select.Option value="demo">I don`t know</Select.Option>
                        <Select.Option value="demo">Initial examination</Select.Option>
                        <Select.Option value="demo">Neurological physical therapy</Select.Option>
                        <Select.Option value="demo">Geriatric physical therapy</Select.Option>
                        <Select.Option value="demo">Vestibular rehabilitation</Select.Option>
                        <Select.Option value="demo">Orthopedic physical therapy</Select.Option>
                        <Select.Option value="demo">Cardiovascular and pulmonary physical therapy</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    className={styles.formItem}
                    label="Note"
                    labelCol={{span: 4}}
                    labelAlign={'left'}
                >
                    <TextArea autoComplete="off" />
                </Form.Item>
                <Row justify={'space-between'}>
                    <Col span={12}>
                        <Form.Item
                            className={styles.formItem}
                            label="Phone"
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
                        <Form.Item
                            className={styles.formItem}
                            label="Ext"
                            labelCol={{span: 4}}
                            labelAlign={'left'}
                        >
                            <InputNumber autoComplete="off" />
                        </Form.Item>
                    </Col>
                </Row>
                <div className={styles.buttonWrapper}>
                    <Button className={styles.button} type={'primary'} htmlType="submit">Ok</Button>
                    <Button className={styles.button}>Cancel</Button>
                </div>
            </Form>
            <div className={`${styles.successBlock} ${isSubmitted && styles.show}`}>
                <CheckOutlined className={styles.successIcon}/>
                <Title level={2}>Thanks for your request!<br />  We are creating appointment and will send a confirmation to you soon!</Title>
                <Button
                    type={'primary'}
                    htmlType="submit"
                    onClick={() => setIsSubmitted(false)}
                >
                    Create another appointment
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