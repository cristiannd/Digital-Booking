import styled from 'styled-components'
import { GoLocation } from 'react-icons/go'
import Divider from 'components/Divider'

export const SearchPlaceOptions = ({
  searchOptionsActived,
  setSearchOptionsActived,
  citySelected,
  setCitySelected,
  cities,
}) => {
  return (
    <SearchPlaceOptionsStyle searchOptionsActived={searchOptionsActived}>
      {cities
        .filter((e) => {
          const fullName = `${e.cityName}, ${e.country}`
          return fullName.toLowerCase().includes(citySelected.toLowerCase())
        })
        .map((e, indice, array) => (
          <li key={e.id} className="list-location">
            <Row
              type="button"
              onClick={() => {
                setCitySelected(`${e.cityName}, ${e.country}`)
                setSearchOptionsActived(false)
              }}
            >
              <Location>
                <div className="location-icon">
                  <GoLocation />
                </div>
                <div className="location">
                  <p className="city">{e.cityName}</p>
                  <p className="country">{e.country}</p>
                </div>
              </Location>
              {array.length - 1 > indice && <Divider lineColor="orange" />}
            </Row>
          </li>
        ))}
    </SearchPlaceOptionsStyle>
  )
}

const Row = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
`

const Location = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  text-align: start;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`

const SearchPlaceOptionsStyle = styled.ul`
  background-color: #fff;
  position: absolute;
  top: 2.65rem;
  width: 100%;
  z-index: 2;
  max-height: 290px;
  overflow-y: scroll;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 0px 10px 0px #00000029;

  display: ${(props) => (props.searchOptionsActived ? 'block' : 'none')};

  ::-webkit-scrollbar {
    display: none;
  }

  li.list-location {
    display: flex;
    flex-direction: column;

    div {
      div.location-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 23px;
        color: ${(props) => props.theme.colors.grey};
      }

      div.location {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        font-weight: 700;
        padding-left: 20px;

        p.city {
          color: #000000;
        }

        p.country {
          color: #545776;
        }
      }
    }
  }
`
