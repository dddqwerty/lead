import { TextBox } from "components";

export default function Test() {
    return (
        <div className="flex grid-rows-4 gap-20 justify-center items-center"> 
            <TextBox number={'247'} txt='Гишүүн' />
            <TextBox number={'4,534'} txt='Үр Шим Хүртэгч' />
            <TextBox number={'37'} txt='Түнш, Хамтрагч' />
            <TextBox number={'1,585,000'} txt='Хүнд Нөлөөлөв' />
        </div>
    )
}