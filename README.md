# Validateur de format de numéro de TVA intracommunautaire français

Toute entreprise assujettie à TVA et domiciliée au sein de l’Union européenne se voit délivrer par son administration fiscale un numéro de TVA intracommunautaire, appelé aussi numéro d’identification fiscal individuel.
le numéro commence par les lettres FR, suivi d’une clé et se termine par le numéro SIREN de l’entreprise.

## Usage dans le navigateur

```html
<script src="index.js"></script>
<script>
	new TVA("FR16825006018").isValid(); // true
</script>
```

