import React from 'react';

class History extends React.Component {
    render() {
        return (
            <div>

                <div className="row history">
                    <h1 className="begin">The Beginning 1974-1979</h1>
                    <div>

                        <img
                            className="pistol"
                            src="https://upload.wikimedia.org/wikipedia/commons/2/25/Pete_Maravich_1977.jpeg"/>
                    </div>

                    <div className="col-lg-8 content">

                        <p className="orlean">The New Orleans Jazz became an official team in the National Basketball
                            Association (NBA) on June 7, 1974. In there first season of the NBA they were
                            able to acquired star player Pete Maravich from the Atlanta Hawks. Pete Maravich
                            was known for his talents on the court with his ball-handling skills. In future
                            season Pete Maravich continued to face with injuries.
                        </p>

                        <p className="orlean"> While the Jazz struggle with the injuries of Pete Maravich they also faced
                            issues with their venue. The court that the Jazz played on there first season
                            was raised so high that the NBA Player Association made the team put a net
                            around the court so players won’t fall off the court. Later, in the future
                            seasons Jazz played at a different venue but the lease for the stadium was too
                            high. Also, with Mardi Gras festivities forced the Jazz to be on the road for a
                            whole month.
                        </p>

                        <p className="orlean">
                            Owner, Sam Battistone suggested that the New Orleans Jazz moved elsewhere due of
                            financial problems and unsupported from the locals. In search for a new city,
                            Battistone, decided to move the team to Salt Lake City.</p>

                    </div>

                </div>

                <div className="row mid">
                    <h1 className="begin">1979-1984: The Adrian Dantley and Darrell Griffith era</h1>
                    <div className="content col-lg-7">
                        <p className="orlean">Their first season in Salt Lake City, they were able to acquire high-scoring
                            forward Adrain Dantley to Utah in exchange for Spencer Haywood. This allow the
                            team to waive Pete Maravich due to the many injuries. Although the Jazz
                            struggled in 1979-1980 season, they were able to acquire the second overall pick
                            in the 1980 NBA draft, which they picked up Darrell Griffith.
                        </p>
                        <p className="orlean">
                            As the Jazz on the course of rebuilding the team, they still struggled in
                            achieving the mark of winning 50% of their games. Coach Tom Nissalke departed
                            from the team after they started the 1981-1992 season 8-12. The General Manger
                            Frank Layden took the place of Nissalke but initially was not an improvement.
                            Jazz continued to struggle and were planning to move until the 1983-1984 season,
                            where they won 50% of their games and in history won the division championships.
                            They were able to make it to the second round of the NBA finals but lost to the
                            Phoenix Suns. That year of the 1984 NBA draft, Jazz acquired John Stockton,
                            which fans were un happy of the selection.
                        </p>
                    </div>
                    <div>
                        <img className="ad"src="http://www.deseretnews.com/media/images/blog/midres/128-1296489269.jpg"/>
                    </div>

                </div>

            </div>
        );
    }
}

export default History;