import { useContext } from 'react'
import {ThemeContext} from './ThemeContex' 

function Paraph () {
  // nhận dữ liệu từ provider cung cấp

  const context = useContext(ThemeContext) // themecontext bên kia nhận dữ liệu là gì thì bên này sẽ nhân nhu vay
  // context này là object bên mà value truyền vào
  return (
        <p className={context.theme}>
        Yêu cầu: làm 1 todo list, khi nhấn add sẽ tự động đưa con trỏ về input, nhấn vào nút x thì sẽ xóa mục đó
        </p>
    )
}

export default Paraph