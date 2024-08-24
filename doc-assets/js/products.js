$(function () {
  // Update the log text

  const $productThumbUrl = "https://xenioushk.github.io/bwl-static-assets/thumbs/"

  function updatesLogTag(string) {
    let Obj = {
      "Updated:": "<b>Updated:</b>",
      "Fixed:": "<b>Fixed:</b>",
    }

    return string.replace(/Updated:|Fixed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateProductsList(data, $prodType = "templates") {
    let $productContainer

    if ($prodType == "themes") {
      $productContainer = $("#bwl_wp_themes")
    } else if ($prodType == "plugins") {
      $productContainer = $("#bwl_wp_plugins")
    } else {
      $productContainer = $("#bwl_html_templates")
    }

    if ($productContainer.length) {
      data.forEach((element) => {
        var outputHtml = "<li>"

        var $itemTitle = element[0]
        var $envatoLink = element[1]
        var $thumb = element[2]

        outputHtml +=
          `<a href="` +
          $envatoLink +
          `" target="_blank" title="` +
          $itemTitle +
          `">
        <img src="` +
          $productThumbUrl +
          $prodType +
          `/` +
          $thumb +
          `" alt="` +
          $itemTitle +
          `">` +
          $itemTitle +
          `</a>`

        outputHtml += "</li>"

        $productContainer.append(outputHtml)
      })
    }
  }

  // Just add a new row.

  const $themeForestUrl = "https://themeforest.net/item/"
  const $codeCanyonUrl = "https://codecanyon.net/item/"

  var themeProductsData = [
    // Add a new row below this comment.

    ["Knowledge Base WP Theme", "https://1.envato.market/kdesk-wp", "kdesk_wp.jpg"],
    ["Elder Citizen WP Theme", "https://1.envato.market/srcare-wp", "srcare_wp.jpg"],
    ["Blood DonationWP Theme", "https://1.envato.market/rbuddies-wp", "reddrop_buddies_wp.jpg"],
    ["Professional Services WP Theme", "https://1.envato.market/skhana-wp", "sharai_khana_wp.jpg"],
    ["Pet Care WP Theme", "https://1.envato.market/petapalozza-wp", "petapalozza_wp.jpg"],
    ["Functional Petition WP Theme", "https://1.envato.market/appeal-wp", "appeal_wp.jpg"],
    ["Charity WP Theme", "https://1.envato.market/wish-wp", "wish_wp.jpg"],
    ["Computer Repair WP Theme", "https://1.envato.market/restore-wp", "restore_wp.jpg"],
    ["Nature & Environmental WP Theme", "https://1.envato.market/greenlife-wp", "greenlife_wp.jpg"],
    ["Political & Activism WP Theme", "https://1.envato.market/dynamism-wp", "dynamism_wp.jpg"],
  ]
  generateProductsList(themeProductsData, "themes")

  // Plugins.

  var pluginsProductsData = [
    // Add a new row below this comment.

    ["BWL Advanced FAQ Manager", "https://1.envato.market/baf-wp", "baf.png"],
    ["Post To Breaking News Manager", "https://1.envato.market/bnm-wp", "bnm.png"],
    ["BWL Pro Voting Manager", "https://1.envato.market/bpvm-wp", "bpvm.png"],
    ["BWL Knowledgebase Manager", "https://1.envato.market/bkbm-wp", "bkbm.png"],
    ["BWL Poll Manager", "https://1.envato.market/bpm-wp", "bpm.png"],
    ["WooCommerce FAQ Tab", "https://1.envato.market/wpfm-wp", "wpfm.png"],
    ["Woocommerce Attachment Tab", "https://1.envato.market/atfc-wp", "atfc.png"],
    ["WPBakery Searchable Accordion", "https://1.envato.market/usva-wp", "usva.png"],
  ]
  generateProductsList(pluginsProductsData, "plugins")

  // Templates.
  var templatesProductsData = [
    // Add a new row below this comment.

    ["Activism Buddies - Social Campaign & Non Profit", "https://1.envato.market/activism-buddies-html", "activism_buddies.jpg"],
    ["Appeal - Petition Template", "https://1.envato.market/appeal-html", "appeal.jpg"],
    ["Aqua Shatar - Professional Swim Academy", "https://1.envato.market/aqua-shatar-html", "aqua_shatar.jpg"],
    ["Auto Repair - Mechanic Center", "https://1.envato.market/auto-repair-html", "auto_repair_template.jpg"],
    ["Awareness - Environmental Protection & Non-Profit Template", "https://1.envato.market/awareness-html5", "awareness.jpg"],
    ["Banizoo - Business Service Template", "https://1.envato.market/banizoo-html", "banizoo.jpg"],
    ["Bicycle Fix - Bicycle Repair Center", "https://1.envato.market/bicycle-fix-html5", "bicycle_fix_template.jpg"],
    ["Blood Donation - Activism & Campaign HTML5 Template", "https://1.envato.market/blood-donation-html5", "blood_donation_template.jpg"],
    ["Cobbler Master - Shoe Repair Center", "https://1.envato.market/cobbler-master-html5", "cobbler_template.jpg"],
    ["Dynamism - Activism Template", "https://1.envato.market/dynamism-html5", "dynamism.jpg"],
    ["Ecosma Buddies - Environmenta Activism", "https://1.envato.market/ecosma-buddies-html5", "ecosma_buddies.jpg"],
    ["Fit Bone - Physiotherapy and Massage Center", "https://1.envato.market/fit-bone-html5", "fit_bone_template.jpg"],
    ["Fixer Buddies - Computer & Laptop Repair", "https://1.envato.market/fixer-buddies-html5", "fixer_buddies.jpg"],
    ["Generosity - Charity & Fundraising", "https://1.envato.market/generosity-html5", "generosity_template.jpg"],
    ["Greenlife - Nature & Environmental", "https://1.envato.market/greenlife-html5", "greenlife_template.jpg"],
    ["Knowledge Desk - Knowledgebase Template", "https://1.envato.market/kdesk-html5", "kdesk_template.jpg"],
    ["Mind Trainer - Counseling Center", "https://1.envato.market/mind-trainer-html5", "mind_trainer_template.jpg"],
    ["Move Fast - Moving Service", "https://1.envato.market/move-fast-html5", "move_fast.jpg"],
    ["Pakkapati - Flooring Service", "https://1.envato.market/pakkapati-html5", "pakkapati.jpg"],
    ["Pet Care - Animal Center", "https://1.envato.market/pet-care-html5", "pet_care.jpg"],
    ["Petmate - Animal Care Center HTML5 Template", "https://1.envato.market/petmate-html5", "pet_mate_template.jpg"],
    ["Political Buddies - Election Campaign & Activism", "https://1.envato.market/political-buddies-html5", "political_buddies.jpg"],
    ["Quala Coat - Law Firm & Lawyers", "https://1.envato.market/quala-coat-html5", "quala_coat.jpg"],
    ["Repair Geek - Laptop Service Center ", "https://1.envato.market/repair-geek-html", "repair_geek_template.jpg"],
    ["Restore - Digital Repair Shop", "https://1.envato.market/restore-html", "restore.jpg"],
    ["SmartFix - Computer Repair Center", "https://1.envato.market/smart-fix-html", "smart_fix.jpg"],
    ["Senior Care - Senior Citizens Support", "https://1.envato.market/senlor-care-html", "srcare_template.jpg"],
    ["Wish - Fundraising & Non-Profit", "https://1.envato.market/wish-html", "wish.jpg"],
  ]
  generateProductsList(templatesProductsData)
})
