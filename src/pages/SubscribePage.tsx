import { gql, useMutation } from '@apollo/client'
import classNames from 'classnames'
import { FormEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/form/Button'
import InputText from '../components/form/InputText'
import { LogoIcon } from '../components/icons/LogoIcon'

const CREATE_SUBSCRIPTION_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`
function SubscribePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const [createSubscriber, { loading: submitingSubscriber }] = useMutation<{
    createSubscriber: { id: string }
  }>(CREATE_SUBSCRIPTION_MUTATION, {
    variables: { name, email },
    onCompleted: () => {
      navigate('/event')
    },
  })

  const handleSubmitForm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      createSubscriber({ variables: { name, email } })
    },
    [name, email]
  )

  return (
    <div
      className={classNames(
        'flex flex-col items-center',
        'min-h-screen',
        'bg-blur bg-cover bg-no-repeat'
      )}
    >
      <div
        className={classNames(
          'flex items-center justify-between',
          'mt-20 mx-auto',
          'max-w-[1100px] w-full'
        )}
      >
        <div className="max-w-[640px]">
          <LogoIcon />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais
            utilizadas e com alta demanda para acessar as melhores oportunidades do
            mercado.
          </p>
        </div>

        <div
          className={classNames('p-8', 'bg-gray-700', 'border border-gray-500 rounded')}
        >
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubmitForm} className="flex flex-col w-full">
            <InputText
              id="name"
              type="text"
              placeholder="Seu nome completo"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              id="email"
              className="mt-2"
              type="email"
              placeholder="Digite seu email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="mt-6"
              as="button"
              type="submit"
              full
              isLoding={submitingSubscriber}
            >
              Garantir minha vaga
            </Button>
          </form>
        </div>
      </div>

      <img className="mt-10" src="src/assets/code-mockup.png" alt="code-mockup" />
    </div>
  )
}

export default SubscribePage
