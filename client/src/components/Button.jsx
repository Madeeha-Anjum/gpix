import classNames from 'classnames'

const Button = ({
  children,
  onClick,
  className = '',
  assent = false,
  disabled = false,
  submit = false
}) => {
  const btnClassName = classNames(
    'p-2 border rounded-lg border-black bg-green-400 bg-opacity-40 hover:bg-green-900 hover:bg-opacity-40',
    className,
    {
      assent: assent,
      disabled: disabled
    }
  )
  const buttonType = submit ? 'submit' : 'button'

  return (
    <>
      <button className={btnClassName} onClick={onClick} type={buttonType}>
        <div className='flex items-center justify-center space-x-3'>
          {children}
        </div>
      </button>
    </>
  )
}

export default Button
