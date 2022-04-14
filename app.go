package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

func main() {
	url := "https://data.mongodb-api.com/app/data-fwnxq/endpoint/data/beta/action/findOne"
	method := "POST"

	payload := strings.NewReader(`{
        "collection":"decorations",
        "database":"items",
        "dataSource":"Cluster0"
    }`)

	client := &http.Client{}

	req, err := http.NewRequest(method, url, payload)
	if err != nil {
		fmt.Println(err)
		return
	}

	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Access-Control-Request-Headers", "*")
	req.Header.Add("api-key", "Ko615ZPA0wwD2CrD6UyudcMFZvlP68u3fa6f3WUZmMETe4rIdO68GsYOixBASa4s")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(body))
}
