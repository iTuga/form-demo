'use client';
import React from 'react';
import { ConfigProvider } from 'antd';

export default function AntdStariProvider({ children }: AntdStariProviderProps) {
  return (
    <ConfigProvider
      componentSize={'large'}
      theme={{
        token: {
          colorPrimary: '#12a5bc',
          colorInfo: '#12a5bc',
          wireframe: false,
        },
        components: {
          Slider: {
            colorPrimary: '#12A5BC',
            colorPrimaryBorder: '#12A5BC',
            colorPrimaryBorderHover: '#12A5BC',
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
            colorLink: '#12A5BC',
            colorTextDisabled: 'black',
          },
          Tag: {
            colorBorder: '#12A5BC',
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
