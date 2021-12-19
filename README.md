# Validateur de format de numéro de TVA intracommunautaire français

[![](https://data.jsdelivr.com/v1/package/npm/tva/badge)](https://www.jsdelivr.com/package/npm/tva) [![GitHub license](https://img.shields.io/github/license/McZen-Technologies/TNRIB?style=flat-square)](https://github.com/McZen-Technologies/TVA/blob/main/LICENSE)

Toute entreprise assujettie à TVA et domiciliée au sein de l’Union européenne se voit délivrer par son administration fiscale un numéro de TVA intracommunautaire, appelé aussi numéro d’identification fiscal individuel.\
le numéro commence par les lettres FR, suivi d’une clé et se termine par le numéro SIREN de l’entreprise.

## Usage dans le navigateur

```html
<script src="https://cdn.jsdelivr.net/npm/tva"></script>
<script>
	new TVA("FR16825006018").isValid(); // true
</script>
```

