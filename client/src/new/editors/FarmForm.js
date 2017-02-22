import React from 'react'
import { Field, reduxForm } from 'redux-form';

const FarmForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form-inputs">
    <h3>Schritt 1 von 4</h3>
    <fieldset>
      <legend>Name und Standort des Betriebs</legend>
      <label htmlFor="name">Name des Hofs</label>
      <Field name="name" component="input" type="text" maxLength="100" />
    </fieldset>
    <fieldset>
      <legend>Webseite des Betriebs</legend>
      <label htmlFor="url">Webseite</label>
      <Field name="url" component="input" type="text" maxLength="100" />
    </fieldset>
    <fieldset className="geocoder">
      <legend>Standort des Depots</legend>
      <label htmlFor="geocoder-address">Straße und Hausnummer</label>
      <Field name="geocoder-address" component="input" type="text" maxLength="100" />
      <label htmlFor="geocoder-city">Ort</label>
      <Field name="geocoder-city" component="input" type="text" maxLength="100" />
      <button className="small button preview-button">Ort auf Karte anzeigen</button>

      <p className="explanation">
        Diese Angaben werden ausschließlich dazu verwendet, den Ort auf der Karte zu markieren.
        Die Adresse wird weder im Web veröffentlicht noch anderweitig weitergegeben.
      </p>
      <div className="preview-map">
        <img className="preview-marker leaflet-marker-icon" />
        <div className="alert-box alert" />
      </div>
    </fieldset>
    <h3>Schritt 2 von 4</h3>
    <fieldset>
      <legend>Details</legend>
      <label htmlFor="description">Beschreibung des Betriebs</label>
      <Field
        name="description" component="textarea" type="text" maxLength="1000"
        placeholder="z.B. Informationen zum Hintergrund, zu den Betreibern oder zur Geschichte des Betriebs."
        rows="8"
      />
      <div className="data-block checkboxes">
        <label htmlFor="vegetable_products">Pflanzliche Produkte</label>
        <ul id="vegetable_products" name="vegetable_products">
          <li>
            <label htmlFor="vegetables">
              <input type="checkbox" name="vegetable_products" value="vegetables" id="vegetables" />
              Gemüse
            </label>
          </li>
          <li>
            <label htmlFor="fruits">
              <input type="checkbox" name="vegetable_products" value="fruits" id="fruits" />
              Obst
            </label>
          </li>
          <li>
            <label htmlFor="mushrooms">
              <input type="checkbox" name="vegetable_products" value="mushrooms" id="mushrooms" />
              Pilze
            </label>
          </li>
          <li>
            <label htmlFor="cereals">
              <input type="checkbox" name="vegetable_products" value="cereals" id="cereals" />
              Getreideprodukte (z.B. Mehl, Grieß, Nudeln)
            </label>
          </li>
          <li>
            <label htmlFor="bread_and_pastries">
              <input type="checkbox" name="vegetable_products" value="bread_and_pastries" id="bread_and_pastries" />
              Brot undBackwaren
            </label>
          </li>
          <li>
            <label htmlFor="spices">
              <input type="checkbox" name="vegetable_products" value="spices" id="spices" />
              Gewürze
            </label>
          </li>
        </ul>
      </div>
      <div className="data-block checkboxes">
        <label htmlFor="animal_products">Tierische Produkte</label>
        <ul id="animal_products" name="animal_products">
          <li>
            <label htmlFor="eggs">
              <input type="checkbox" name="animal_products" value="eggs" id="eggs" />
              Eier
            </label>
          </li>
          <li>
            <label htmlFor="meat">
              <input type="checkbox" name="animal_products" value="meat" id="meat" />
              Fleisch
            </label>
          </li>
          <li>
            <label htmlFor="sausages">
              <input type="checkbox" name="animal_products" value="sausages" id="sausages" />
              Wurstwaren
            </label>
          </li>
          <li>
            <label htmlFor="milk">
              <input type="checkbox" name="animal_products" value="milk" id="milk" />
              Milch
            </label>
          </li>
          <li>
            <label htmlFor="dairy">
              <input type="checkbox" name="animal_products" value="dairy" id="dairy" />
              Milchprodukte (z.B. Butter, Käse, Joghurt)
            </label>
          </li>
          <li>
            <label htmlFor="fish">
              <input type="checkbox" name="animal_products" value="fish" id="fish" />
              Fisch
            </label>
            <label htmlFor="honey">
              <input type="checkbox" name="animal_products" value="honey" id="honey" />
              Honig
            </label>
          </li>
        </ul>
      </div>
      <div className="data-block checkboxes">
        <label htmlFor="beverages">Getränke</label>
        <ul id="beverages" name="beverages">
          <li>
            <label htmlFor="juice">
              <input type="checkbox" name="beverages" value="juice" id="juice" />
              Saft
            </label>
          </li>
          <li>
            <label htmlFor="wine">
              <input type="checkbox" name="beverages" value="wine" id="wine" />
              Wein
            </label>
          </li>
          <li>
            <label htmlFor="beer">
              <input type="checkbox" name="beverages" value="beer" id="beer" />
              Bier
            </label>
          </li>
        </ul>
      </div>
      <label htmlFor="additional_product_information">Zusätzliche Informationen zum Lebensmittelangebot</label>
      <Field
        name="additional_product_information" component="textarea" type="text" maxLength="1000"
        placeholder="z.B. Informationen zu besonderen Sorten, Sonderkulturen, verarbeiteten Lebensmitteln o.ä."
        rows="6"
      />
      <fieldset>
        <label htmlFor="founded_at_year">Solidarische Landwirtschaft seit bzw. ab (Jahr)</label>
        <Field name="founded_at_year" component="select" type="text">
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
          <option>2008</option>
          <option>2007</option>
          <option>2006</option>
          <option>2005</option>
          <option>2004</option>
          <option>2003</option>
          <option>2002</option>
          <option>2001</option>
          <option>2000</option>
          <option>1999</option>
          <option>1998</option>
          <option>1997</option>
          <option>1996</option>
          <option>1995</option>
          <option>1994</option>
          <option>1993</option>
          <option>1992</option>
          <option>1991</option>
          <option>1990</option>
          <option>1989</option>
          <option>1988</option>
          <option>1987</option>
          <option>1986</option>
          <option>1985</option>
          <option>1984</option>
          <option>1983</option>
          <option>1982</option>
          <option>1981</option>
          <option>1980</option>
          <option>1979</option>
          <option>1978</option>
          <option>1977</option>
          <option>1976</option>
          <option>1975</option>
          <option>1974</option>
          <option>1973</option>
          <option>1972</option>
          <option>1971</option>
          <option>1970</option>
          <option>1969</option>
          <option>1968</option>
          <option>1967</option>
          <option>1966</option>
          <option>1965</option>
          <option>1964</option>
          <option>1963</option>
          <option>1962</option>
          <option>1961</option>
          <option>1960</option>
          <option>1959</option>
          <option>1958</option>
          <option>1957</option>
          <option>1956</option>
          <option>1955</option>
          <option>1954</option>
          <option>1953</option>
          <option>1952</option>
          <option>1951</option>
          <option>1950</option>
          <option>1949</option>
          <option>1948</option>
          <option>1947</option>
          <option>1946</option>
          <option>1945</option>
          <option>1944</option>
          <option>1943</option>
          <option>1942</option>
          <option>1941</option>
          <option>1940</option>
          <option>1939</option>
          <option>1938</option>
          <option>1937</option>
          <option>1936</option>
          <option>1935</option>
          <option>1934</option>
          <option>1933</option>
          <option>1932</option>
          <option>1931</option>
          <option>1930</option>
          <option>1929</option>
          <option>1928</option>
          <option>1927</option>
          <option>1926</option>
          <option>1925</option>
          <option>1924</option>
          <option>1923</option>
          <option>1922</option>
          <option>1921</option>
          <option>1920</option>
          <option>1919</option>
          <option>1918</option>
        </Field>
      </fieldset>
      <fieldset>
        <label htmlFor="founded_at_month">Solidarische Landwirtschaft seit bzw. ab (Monat)</label>
        <Field name="founded_at_month" component="select" type="text">
          <option value="" />
          <option value="1">Januar</option>
          <option value="2">Februar</option>
          <option value="3">März</option>
          <option value="4">April</option>
          <option value="5">Mai</option>
          <option value="6">Juni</option>
          <option value="7">Juli</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Dezember</option>
        </Field>
      </fieldset>
      <div className="data-block checkboxes">
        <label htmlFor="acts_ecological">Wir wirtschaften ökologisch</label>
        <input type="checkbox" name="acts_ecological" value="acts_ecological" id="acts_ecological" />
      </div>
      <label htmlFor="economical_behavior">Erläuterungen zur Wirtschaftsweise</label>
      <Field
        name="economical_behavior" component="textarea" type="text" maxLength="1000"
        placeholder="z.B. Mitgliedschaft in Anbauverbänden o.ä."
        rows="6"
      />
    </fieldset>
    <h3>Schritt 3 von 4</h3>
    <fieldset>
      <legend>Mitgliedschaft</legend>
      <fieldset>
        <div className="data-block radios">
          <label htmlFor="maximum_members">Getränke</label>
          <ul id="maximum_members" name="maximum_members">
            <li>
              <label htmlFor="accepts_new_members_yes">
                <input type="radio" name="accepts_new_members" value="yes" id="accepts_new_members_yes" />
                Wir haben freie Plätze
              </label>
            </li>
            <li>
              <label htmlFor="accepts_new_members_no">
                <input type="radio" name="accepts_new_members" value="no" id="accepts_new_members_no" />
                Wir haben keine freien Plätze
              </label>
            </li>
            <li>
              <label htmlFor="accepts_new_members_waitlist">
                <input type="radio" name="accepts_new_members" value="waitlist" id="accepts_new_members_waitlist" />
                Wir haben keine freien Plätze, aber eine Warteliste
              </label>
            </li>
          </ul>
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="maximum_members">Maximale Mitgliederzahl</label>
        <Field name="maximum_members" component="input" type="text" maxLength="100" />
      </fieldset>
      <div className="data-desc">Wieviele Esser kann der Betrieb versorgen?</div>
    </fieldset>
    <fieldset>
      <label htmlFor="participation">Wie können sich die Mitglieder aktiv einbringen?</label>
      <Field
        name="participation" component="textarea" type="text" maxLength="1000"
        rows="8"
      />
    </fieldset>
    <div className="data-desc">Mitglieder können beispielsweise an regelmäßigen Mitmachtagen bei der
      Gartenarbeit helfen.
    </div>
    <h3>Schritt 4 von 4</h3>
    <fieldset>
      <legend>Kontaktdaten</legend>
      Deine aktuellen Kontaktdaten sind:<br />
      <p>
        Production Superadmin<br />
        Email-Adresse: admin@teikei.com<br />
        Telefon:
      </p>
      <p className="explanation">
        Die Daten kannst du in den <a
          href="users/edit" target="_blank"
          rel="noopener noreferrer"
        >Benutzereinstellungen</a> anpassen.
      </p>
    </fieldset>
    <ul id="wizard-navigation" className="button-group">
      <li>
        <button className="button submit">Speichern</button>
      </li>
    </ul>
  </form>
)

FarmForm.propTypes = FarmForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default reduxForm({ form: 'depot' })(FarmForm)
