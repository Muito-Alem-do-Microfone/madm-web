import HomeCard from "../../molecules/HomeCard"

function CardSection1() {
    return (
        <>
            <section>

                <div>
                    <p>O que você pode fazer por aqui?</p>
                </div>

                <div>
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                </div>
                    
            </section>
        </>
    );
  }
  
  export default CardSection1;