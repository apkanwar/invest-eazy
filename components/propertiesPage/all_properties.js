import styles from '../../styles/all_properties.module.css'
import Image from 'next/image'
import HotelImage from '../../public/hotel.webp'
import Link from 'next/link'

export default function AllProperties({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.title}>Availible Properties</h1>
      </div>

      <div className={styles.flexContainer}>
        {data.map(property => {
          return (
            <div className={styles.info}>
              <div className={styles.imageContainer}>
                <Image src={`/properties/${property.image}`} height={850} width={1100} />
                <div className={styles.progress}>
                  <div className={styles.propertyType}>
                    <div className={styles.type}>
                      {property.type}
                    </div>
                  </div>
                  <div className={styles.progressValue}>
                    <div className={styles.value}>
                      {property.investmentGained / property.investmentNeeded * 100}%
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.propertyDetails}>
                <h3>{property.name}</h3>
                <h4>{property.address}</h4>
                <p>
                  {property.description}
                </p>
                <Link href={`/properties/${encodeURIComponent(property.id)}`}>
                  <div className={styles.propertyButton}>
                    Learn More
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.sectionTitle}>
        <h1 className={styles.title}>Recently Closed Properties</h1>
      </div>

      <div className={[styles.flexContainer, styles.bottomBorder].join(" ")}>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
            <div className={styles.progress}>
              <div className={styles.propertyType}>
                <div className={styles.type}>
                  Lending
                </div>
              </div>
              <div className={styles.progressValue}>
                <div className={styles.value}>
                  100%
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetails}>
            <h3>OnPremiere Suites</h3>
            <h4>Markham, ON</h4>
            <p>
              Participate in the ownership of a newly renovated and fully occupied 19-unit multifamily apartment building in the Markham area.
            </p>
            <div className={styles.propertyClosed}>
              Closed July 2022
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
            <div className={styles.progress}>
              <div className={styles.propertyType}>
                <div className={styles.type}>
                  Acquisitions
                </div>
                <div className={styles.position}>
                  Realized
                </div>
              </div>
              <div className={styles.progressValue}>
                <div className={styles.value}>
                  100%
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetails}>
            <h3>LIVE Apartments</h3>
            <h4>Ottawa, ON</h4>
            <p>
              Start to own a newly renovated and fully occupied 25-unit multifamily apartment building in the downtown Ottawa area near to bus routes.
            </p>
            <div className={styles.propertyClosed}>
              Closed January 2022
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <Image src={HotelImage} height={1100} />
            <div className={styles.progress}>
              <div className={styles.propertyType}>
                <div className={styles.type}>
                  Development
                </div>
                <div className={styles.position}>
                  Realized
                </div>
              </div>
              <div className={styles.progressValue}>
                <div className={styles.value}>
                  100%
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyDetails}>
            <h3>BH Apartments</h3>
            <h4>Halimton, ON</h4>
            <p>
              Start owning the newly renovated and fully occupied 15-unit multifamily apartment building in a prime Halimton location near McMasters university.
            </p>
            <div className={styles.propertyClosed}>
              Closed April 2021
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}