## Carousel 

Carousel is based on [react-slick](https://github.com/akiran/react-slick) library 

For configuration and examples look at the [Documentation](https://react-slick.neostack.com/docs/get-started)

You need also connect css files via npm:

`npm install slick-carousel --save`

Necessary imports 

```javascript
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
```

```jsx

        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
```
