import './styles/AccordionsSpoilers.css';
import SectionTitle from './SectionTitle';
import * as Accordion from '@radix-ui/react-accordion';

function AccordionsSpoilers({ data }) {
    return (
        <section className="accordion-spoiler">
            <div className="container">
                <div className="accordion-spoiler__top">
                    <SectionTitle titleBig="Frequently Asked Questions" titleSmaller="FAQ" />
                </div>
                <Accordion.Root className="accordion-spoiler__holder" type="single" collapsible defaultValue="item-1">
                    {data &&
                        data.length > 0 &&
                        data.map((entry, i) => (
                            <Accordion.Item key={i} className="accordion-spoiler__entry" value={`item-${i + 1}`}>
                                <Accordion.Header className="accordion-spoiler__entry-header">
                                    <Accordion.Trigger>{entry[0]}</Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="accordion-spoiler__content">{entry[1]}</Accordion.Content>
                            </Accordion.Item>
                        ))}
                </Accordion.Root>
            </div>
        </section>
    );
}

export default AccordionsSpoilers;
