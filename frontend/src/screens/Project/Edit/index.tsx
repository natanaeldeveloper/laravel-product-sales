import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../../services/api"
import { Card, Form, Input, Row, Col, Skeleton } from 'antd'

type ProjectPropst = {
  id: number,
  name: string,
  description: string,
}

const { TextArea } = Input

const ProjectEditScreen: React.FC = () => {

  const [loading, setLoading] = useState(true);

  const stopLoader = (checked: boolean) => {
    setLoading(!checked);
  };

  const [project, setProject] = useState<ProjectPropst>()
  const { projectId } = useParams()
  const [form] = Form.useForm()

  useEffect(() => {
    api
      .get('projects/' + projectId + '')
      .then(response => {
        setProject(response.data.data)
        stopLoader(loading)
      })
      .catch(err => {
        console.error(err.data?.data?.message)
      })

  }, [])

  useEffect(() => {
    form.setFieldsValue({
      name: project?.name,
      description: project?.description
    })
  }, [project])

  return (
    <div>
      <Row justify="center">
        <Col span={10}>
          <Card>
            <Form
              name="edit"
              autoComplete="off"
              form={form}
            >
              <Skeleton loading={loading} active>
                <Form.Item
                  label="Nome"
                  name="name"
                  rules={[{ required: true, message: 'Campo obrigatório' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Descrição"
                  name="description"
                  rules={[{ required: true, message: 'Campo obrigatório' }]}
                >
                  <TextArea />
                </Form.Item>
              </Skeleton>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectEditScreen