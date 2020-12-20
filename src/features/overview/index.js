import styled from "styled-components";
import { Link } from "react-router-dom";

import CopyToClipboard from "../../components/common/CopyToClipboard";
import gift from "../../assets/images/gift.svg";
import appstorebadge from "../../assets/images/appstorebadge.svg";
import playstorebadge from "../../assets/images/playstorebadge.svg";

const OverviewPageWrapper = styled.div`
  min-height: 100vh;
`;

const Section = styled.section`
  min-height: 30rem;
  padding: 0 2rem;
  border-bottom: 1px dashed rgba(73, 94, 75, 0.2);
`;

const SectionEarnings = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionEarningsContent = styled.div`
  flex: 0 0 35%;
`;

const SectionEarningsHeading = styled.span`
  margin-bottom: 0.7rem;
  display: inline-block;
  font-size: 1.3rem;
`;

const SectionEarningsEarning = styled.h2`
  font-size: 4.5rem;
  color: #3d3d3d;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
`;

const SectionEarningsLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: inherit;
  margin-bottom: 1.5rem;
`;

const SectionEarningsNote = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: #77869e;
`;

const ShareContainer = styled.div`
  flex: 0 0 55%;
`;

const ShareContainerHeading = styled.h3`
  margin-bottom: 1rem;
`;

const ShareContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-top: 2.5rem;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 10rem;
  margin-right: 2.5rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex: 0 0 6rem;
    margin-right: 1rem;
  }

  & > img {
    width: 100%;
  }
`;

const Share = styled.div`
  flex: 1;
  /* margin-bottom: 2.5rem; */

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex: 1;
    margin-bottom: 2rem;
  }

  & > label {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: #77869e;
    margin-bottom: 3rem;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }

  & > span {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #042c5c;
    margin-bottom: 0.5rem;
    display: inline-block;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      display: block;
      margin-bottom: 0.8rem;
    }
  }

  & > input {
    background: #f5faf6;
    border: 1px solid rgba(119, 134, 158, 0.3);
    border-radius: 4px;
    height: 35px;
    width: 270px;
    border-radius: 4px;
    padding: 1.5rem;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #77869e;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      width: 82%;
      height: 3.5rem;
    }

    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #77869e;

      @media ${({ theme }) => theme.mediaQueries.tablet} {
        font-size: 1.4rem;
      }
    }
  }
`;

const BadgeContainer = styled.div`
  /* text-align: center; */
  margin-top: 2.5rem;
`;

const Badge = styled.img`
  width: 13rem;

  &:first-child {
    margin-right: 1rem;
  }
`;

const SectionPromotions = styled(Section)``;

const SectionSpotlight = styled(Section)``;

const SectionBounties = styled(Section)``;

const OverviewPage = () => {
  return (
    <OverviewPageWrapper>
      <SectionSpotlight></SectionSpotlight>
      <SectionEarnings>
        <SectionEarningsContent>
          <SectionEarningsHeading>Your earnings:</SectionEarningsHeading>
          <SectionEarningsEarning>&#8358;3,000</SectionEarningsEarning>
          <SectionEarningsLink to="/dashboard/earnings">
            go to earnings &#8594;
          </SectionEarningsLink>
          <SectionEarningsNote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            dignissimos exercitationem cumque dolorum.
          </SectionEarningsNote>
        </SectionEarningsContent>
        <ShareContainer>
          <ShareContainerContent>
            <ImageContainer>
              <img src={gift} alt="" />
            </ImageContainer>
            <Share>
              <ShareContainerHeading>Share & Earn</ShareContainerHeading>
              <label for="share">
                Refer Friends and get $ for each referral
              </label>
              <span>Copy shareable link</span>
              <CopyToClipboard text="sksksksksks" />
              <BadgeContainer>
                <Badge src={appstorebadge} alt="" />
                <Badge src={playstorebadge} alt="" />
              </BadgeContainer>
            </Share>
          </ShareContainerContent>
        </ShareContainer>
      </SectionEarnings>
      <SectionPromotions></SectionPromotions>
      <SectionBounties></SectionBounties>
    </OverviewPageWrapper>
  );
};

export default OverviewPage;
