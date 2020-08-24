[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/lfbdbusiness/api-boleto-braip)

### END-POINTS:

#### Boleto
- GET /api/v1/bankslip/download/:salesCode

#### WhatsApp
- GET /api/v1/whatsapp/status/
- GET /api/v1/whatsapp/qrcode/
- POST /api/v1/whatsapp/message/
```
{
    "message": "Teste API Whatsapp ",
    "number": "47999999999"
}
```

- POST /api/v1/whatsapp/file/
```
{
    "caption": "Boleto",
    "number": "47999999999",
    "salesCode": "venxk392"
}
```

### QR Code example
<div>
  <p>QR Code</p>
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEX///8AAABVwtN+AAADCklEQVR42uyZ0aqcMQiEBV9L8NUFX0uwzPjvn/b0Ol4cNt2WNnwFN9EZzZHv+q7fuLS7M8vLPDPEu7wzA9uxBoRoZmaYeWd3l5dnYXsPyEZsGaaI1MwzxGy2NwFz/qmZpSWOoNcBUYRnynPK7gxdBXArHmJIGewHwox/b/M2wKT9f/3I6qvAc1pl5oXYkCpl9rOC7wKGOBM1U4rANFE4JuKxBWiZmDdqp8u0nv9QlJMlQHT+1VSQ8i4t7Qyvo6S3AS0P0/BGnjoFFRfXJ6MWgOyc04F6UlMTwl66CBTuKnEyhnA7eFaTM0sA4sviJzQQmcLWwmQPwGWhRhAonA21q6Pra4BMwirlGx9oCarp/RYbQJg/Bt/FU2oksH9qdwHQZNFgT+FuMe7KjTUAAs5sLdwQC2b6nU+Q9wERXI1neNDWkSjeUFdbBMTEOzy0kDPImk7KaWwBKBI0Nbwc/A3ReUxBbQHwk85Cl8WOC24GZ3mr+z4gPtYBY3eae3jOYcUWgE4PCh5TtNBwdsDan2+xAOBkkKhZUJEwtBzKuSi2AKgYdBNmQktB/UzgsgUc5ZzLMuqJYgqINSDgHbA0ihca36S/vO6/ASianCleuAhujLL2Ju19gE0vdAMCDifzYtK8Q9B9gObO8QvJGmy/ufl2xQsAgsF9zVQIiBbr8RbOdQDZytYKlE6qjMm+zrsAYCIP/pYnfzEP2Dmm6wBkHNmC+plpxLijZyi+DvB5xqlaTJiaBxu0HbIGwE+NLzXcDvYbhPcAiBdCa8gIJhGmKyNfA5pOxjPCL6Wk0m7XAOG9oM2N95WArmJnUrsNwNTGU5NFKxMlZvTYAp73GK+Ze5SPAxSSM4hdB3hP8zrSbLmdA0ifznwBYOJSSmHs6P45pJ9G6zrAyEqe92NOYtPsnc78PsAhFAc1gymL1vPvJuc+wC6bqqHPMzJfUPsM5juAz1YGcpcVLOfhbgngu6Ho/FiDj4d1BGQB4NMt3Z2ZyynskdM1YGZBZ4tXqNrg68QrIAvAd33XL1t/AgAA///cmclK8BtkHwAAAABJRU5ErkJggg==" />
</div>
