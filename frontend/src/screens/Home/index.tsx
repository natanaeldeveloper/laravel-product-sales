import React, { useEffect, useState } from 'react';
import { Card, Skeleton, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons'

import api from '../../services/api';

const { Meta } = Card;

type ProjectProps = {
  id?: number,
  name?: string,
}

const HomeScreen: React.FC = () => {

  const [loading, setLoading] = useState(true);

  const stopLoader = (checked: boolean) => {
    setLoading(!checked);
  };

  const [projects, setProjects] = useState<Array<ProjectProps>>([
    { id: 1 }, { id: 2 }, { id: 3 }
  ])

  useEffect(() => {
    api
      .get('api/projects')
      .then(response => {
        setProjects(response.data.data)
        stopLoader(loading)
      })
      .catch(err => {
        console.error(err.response?.data?.message)
      })
  }, [])

  return (
    <div>
      <Space className='w-100 d-flex'>
        {projects.map(item => {
          return (
            <Card key={item.id}
              hoverable
              style={{ width: 240 }}
              actions={[
                <EditOutlined key="edit" />
              ]}
            >
              <Skeleton loading={loading} active>
                <Meta
                  title={item.name}
                  description="Venda de Tapiocas" />
              </Skeleton>
            </Card>
          )
        })}
      </Space>
    </div>
  )
};

export default HomeScreen;