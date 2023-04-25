import QRcode from '../QRcode/QRcode'
import Text from '../Text/Text'
import './Card.css'

function Card() {

    return (
        <>
            <div className="card__content">
                <QRcode />
                <Text />
            </div>
        </>
    )
}

export default Card