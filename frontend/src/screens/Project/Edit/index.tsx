import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import api from "../../../services/api"
import { Card, Form, Input, Row, Col, Skeleton, Button, message, Space } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

type ProjectPropst = {
  id: number,
  name: string,
  description: string,
}

const ProjectEditScreen = () => {

  const { TextArea } = Input
  const [messageApi, contextHolder] = message.useMessage()

  const [loading, setLoading] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);

  const stopLoading = () => {
    setLoading(false);
  };

  const stopLoadingForm = () => {
    setLoadingForm(false);
  };

  const startLoadingForm = () => {
    setLoadingForm(true);
  };

  const [project, setProject] = useState<ProjectPropst>()
  const { projectId } = useParams()
  const [form] = Form.useForm()
  const [fieldErrors, setFieldErrors] = useState<any>()

  useEffect(() => {
    api
      .get('projects/' + projectId)
      .then(response => {
        setProject(response.data.data)
        stopLoading()
      })
      .catch(err => {
        console.error(err.data.message)
      })

  }, [])

  useEffect(() => {
    form.setFieldsValue({
      name: project?.name,
      description: project?.description
    })
  }, [project])

  function onFinish(values: any) {
    startLoadingForm()
    api
      .put('projects/' + projectId, values)
      .then(response => {
        stopLoadingForm()
        setFieldErrors({})
        messageApi.success({
          type: 'success',
          content: response.data.message,
        })
      })
      .catch(err => {
        stopLoadingForm()
        const errors: any = {}
        for (let key in err.response.data.errors) {
          errors[key] = {
            validateStatus: 'error',
            help: err.response.data.errors[key][0]
          }
        }
        setFieldErrors(errors)
      })
  }
  return (
    <div>
      {contextHolder}
      <Row justify="center">
        <Col lg={10} sm={16} xs={20}>
          <Card title="Formulário de edição">
            <Form
              layout="vertical"
              name="edit"
              autoComplete="off"
              form={form}
              onFinish={onFinish}
            >
              <Skeleton loading={loading} active>
                <Form.Item
                  label="Nome"
                  name="name"
                  {...fieldErrors?.name}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Descrição"
                  name="description"
                  {...fieldErrors?.description}
                >
                  <TextArea />
                </Form.Item>

                <Row justify="end">
                  <Space>
                    <Form.Item>
                      <Link to="/">
                        <Button type="text">Voltar</Button>
                      </Link>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" loading={loadingForm} icon={<SaveOutlined />}>
                        Salvar
                      </Button>
                    </Form.Item>
                  </Space>
                </Row>
              </Skeleton>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectEditScreen