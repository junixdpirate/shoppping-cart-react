import Router, { useRouter } from 'next/router'

export default function () {

    const sendData = () => {
        Router.push({
            pathname : '/product-check',
            query : { 
                code : 'APPLE',
                name : 'Appppple'
            }
        })
    }

    return (
        <div>
            <a onClick={sendData}>Send Data</a>
        </div>
    )
}