import React, { useEffect, useState } from 'react';
import { Button, Card, Skeleton, Space } from 'antd';
import { EditOutlined, SettingOutlined } from '@ant-design/icons'

import api from '../../services/api';
import { Link } from 'react-router-dom';

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
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
  ])

  useEffect(() => {
    api
      .get('projects')
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
                <SettingOutlined key="setting" />,
                <Link to={'/projects/' + item.id + '/edit'}> <EditOutlined key="edit" /></Link>,
              ]}
            >
              <Skeleton loading={loading} active>
                <Link to={'projects/' + item.id}>
                  <Meta
                    title={item.name}
                    description="Venda de Tapiocas" />
                </Link>
              </Skeleton>
            </Card>
          )
        })}
      </Space>
    </div>
  )
};

export default HomeScreen;