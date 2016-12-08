# Quick start

    git clone https://github.com/robfallows/reactive-google-geo-chart.git testapp
    cd testapp
    meteor npm i
    meteor

Then browse to localhost:3000

In a separate window

    cd testapp
    meteor mongo
    db.Countries.insert({country: 'GB', popularity: 900})
    db.Countries.update({country: 'Germany'}, {$set: {popularity:400}})

and watch the chart while you change the collection data.