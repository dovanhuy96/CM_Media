import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6 style={{margin: '10px 0'}}>{t(title)}</h6>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}> 
                <li style={{
                  fontSize: 22,
                  fontWeight: 600,
                  listStyle: 'none',
                  color: '#18216d',
                  padding: '15px 0',
                  textAlign:'center'
                }}>"Rẽ Trái": để luôn khác biệt</li>
                <li style={{
                  fontSize: 22,
                  fontWeight: 600,
                  listStyle: 'none',
                  color: '#18216d',
                  padding: '15px 0',
                  textAlign:'center'
                }}>Chân thành: để có nhiều cộng sự</li>
                
                <li style={{
                  fontSize: 24,
                  fontWeight: 600,
                  listStyle: 'none',
                  color: '#18216d',
                  padding: '15px 0',
                  textAlign:'center'
                }}>Tốc độ: để không bao giờ đến sau</li>
                <li style={{
                  fontSize: 26,
                  fontWeight: 600,
                  listStyle: 'none',
                  color: '#18216d',
                  padding: '15px 0',
                  textAlign:'center'
                }}>Lắng nghe: để không bao giờ tụt hậu</li>
                <li style={{
                  fontSize: 27,
                  fontWeight: 600,
                  listStyle: 'none',
                  color: '#18216d',
                  padding: '15px 0',
                  textAlign:'center'
                }}>Thành công là do tập thể, thất bại là do tôi</li>
              </ul>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
