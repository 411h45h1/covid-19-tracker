import React, { useContext, useEffect } from "react";
import AppContext from "../context/appContext";
import {
  Grid,
  Header,
  Card,
  Label,
  Segment,
  Statistic,
} from "semantic-ui-react";

const DataList = () => {
  const state = useContext(AppContext);
  const { summaryData, onDataSummary } = state;

  useEffect(() => {
    if (!summaryData) {
      onDataSummary();
    } else if (summaryData) {
      console.log("Global Data", summaryData);
    }
  }, [summaryData, onDataSummary]);

  return (
    <div style={{ padding: 20 }}>
      <Segment loading={summaryData ? false : true}>
        <Header as="h3" block>
          Global Stats
        </Header>
        {summaryData && (
          <Grid centered>
            <Grid.Row centered columns={4}>
              {summaryData.Countries.map((i, k) => {
                return (
                  <Grid.Column key={k}>
                    <Segment
                      inverted
                      className="OutputItem"
                      style={{ marginBottom: 10 }}
                    >
                      <Label color="purple" size="large" ribbon>
                        {i.Country}
                      </Label>

                      <Card>
                        <Card.Content>
                          <Statistic.Group inverted size="mini" horizontal>
                            <Statistic
                              inverted
                              color="yellow"
                              label="Highest Position"
                              value={i.TotalConfirmed}
                            />

                            <Statistic
                              inverted
                              color="yellow"
                              label="Highest Position"
                              value={i.TotalRecovered}
                            />

                            <Statistic
                              inverted
                              color="yellow"
                              label="Highest Position"
                              value={i.TotalDeaths}
                            />
                          </Statistic.Group>
                        </Card.Content>
                      </Card>
                    </Segment>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        )}
      </Segment>
    </div>
  );
};

export default DataList;
