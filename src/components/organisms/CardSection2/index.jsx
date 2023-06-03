import UserCard from "../../molecules/UserCard"

function CardSection2() {
    return (
        <>
            <section>

                <div>
                    <p>Quem já está querendo formar banda perto de você?</p>
                </div>

                <div>
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>
                    
            </section>
        </>
    );
  }
 
  export default CardSection2;