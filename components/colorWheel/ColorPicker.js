import { useCallback, useEffect, useState } from 'react';
import { colord, Colord } from "colord"
import produce from "immer"

import PropTypes from 'prop-types';

import styles from './styles/ColorPicker.module.css';
import ColorWheel from './ColorWheel';

/* interface ColorPicker {
  size: number,
  initialColor: Colord,
  colors: Colord[],
  onChange: function,
} */

const ColorPicker = ({
  size,
  initialColor,
  colors,
  onChange,
}) => {
  const [pickedColor, setPickedColor] = useState(colord(initialColor));
  

  useEffect(() => {
    setPickedColor(colord(initialColor))
  }, [initialColor]);

  const setColorFromWheel = useCallback(hsl => {
    const updatedColor = produce(hsl, draft => ({...pickedColor.toHsl(), ...draft }))
    
    setPickedColor(colord(updatedColor))
    onChange(colord(updatedColor));
  }, [onChange, pickedColor]);

  return (
    <div>
      <div
        className={styles.outerContainer}
        style={{
          height: size,
          width: size,
        }}
      >
        <ColorWheel
          color={pickedColor.toHsl()}
          colors={colors}
          size={size * (5 / 6)}
          setColor={setColorFromWheel}
        />
        <div className={styles.pickedColorContainer}>
          <div
            className={styles.pickedColor}
            style={{ backgroundColor: pickedColor.toHex()}}
          >
            <div
              className={styles.hexValue}
              style={{
                fontSize: size / 12,
                color: pickedColor.brightness() > .7 ? 'black' : 'white',
              }}
            >
              {pickedColor.toHex()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ColorPicker.propTypes = {
  /** Size of the container in pixels (Container is a square). */
  size: PropTypes.number,
  /** Color to render onto color wheel. It can be hex(#ffffff) or rgb object({r:0, g:0, b:0}). */
  initialColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ h: PropTypes.number, s: PropTypes.number, l: PropTypes.number }),
    PropTypes.shape({ r: PropTypes.number, g: PropTypes.number, b: PropTypes.number }),
  ]),
  /** Function which will be called when color change occurs. Parameter is a hsl object */
  onChange: PropTypes.func,
};

ColorPicker.defaultProps = {
  size: 100,
  initialColor: '#FF0000',
  onChange: Function,
};

export default ColorPicker;
