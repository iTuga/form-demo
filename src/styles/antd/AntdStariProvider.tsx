'use client';
import React from 'react';
import { ConfigProvider } from 'antd';

export default function AntdStariProvider({ children }: AntdStariProviderProps) {
  return (
    <ConfigProvider
      componentSize={'large'}
      theme={{
        token: {
          colorPrimary: '#00b4ff',
          colorInfo: '#00b4ff',
          wireframe: false,
          //fontFamily: 'Roboto',
        },
        components: {
          Slider: {
            colorPrimary: '#00b4ff',
            colorPrimaryBorder: '#00b4ff',
            colorPrimaryBorderHover: '#00b4ff',
          },
          Layout: {
            colorBgHeader: '#ffffff',
            controlHeight: 24,
          },
          Menu: {
            itemBorderRadius: 0,
            itemMarginInline: 0,
            colorText: 'gray',
          },
          Pagination: {
            borderRadius: 2,
          },
          DatePicker: {
            controlOutline: 'rgba(0, 228, 228, 0.11)',
            colorLink: '#00b4ff',
            colorTextDisabled: 'black',
          },
          Tag: {
            colorBorder: '#00b4ff',
          },
          Select: {
            colorTextDisabled: 'black',
          },
          Input: {
            colorTextDisabled: 'black',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

interface AntdStariProviderProps {
  children: React.ReactNode;
}
